import { getHistoricalWeather } from "../../weather-report/source/weatherService";
import { WeatherData } from "../../weather-report/source/weatherModel";

jest.mock("../../weather-report/source/database", () => ({
  getDb: () => ({
    all: (query: string, cb: Function) => {
      if (query.includes("Jakarta")) {
        cb(null, [
          {
            city: "Jakarta",
            temperature: 28,
            conditions: "Cloudy",
            humidity: 75,
            wind_speed: 15,
            date_recorded: "2025-07-25T02:00:00.000Z",
          },
        ]);
      } else {
        cb(null, []);
      }
    },
  }),
}));

describe("getHistoricalWeather", () => {
  it("should return weather data for valid city", async () => {
    const result = await getHistoricalWeather("Jakarta");
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].city).toBe("Jakarta");
  });

  it("should return empty array for unknown city", async () => {
    const result = await getHistoricalWeather("UnknownCity");
    expect(result).toEqual([]);
  });

  it("should handle database error", async () => {
    jest
      .spyOn(require("../../weather-report/source/database"), "getDb")
      .mockReturnValue({
        all: (query: string, cb: Function) => cb(new Error("DB error"), null),
      });
    await expect(getHistoricalWeather("Jakarta")).rejects.toThrow();
  });
});
