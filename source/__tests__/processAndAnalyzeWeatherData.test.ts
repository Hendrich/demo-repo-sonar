import { processAndAnalyzeWeatherData } from "../../weather-report/source/weatherService";
import { WeatherData } from "../../weather-report/source/weatherModel";

describe("processAndAnalyzeWeatherData", () => {
  it("should return correct analysis for weather data", () => {
    const mockData: WeatherData[] = [
      {
        city: "Jakarta",
        temperature: 30,
        conditions: "Sunny",
        humidity: 70,
        wind_speed: 20,
        date_recorded: "2025-07-25T00:00:00.000Z",
      },
      {
        city: "Bandung",
        temperature: 20,
        conditions: "Rainy",
        humidity: 80,
        wind_speed: 10,
        date_recorded: "2025-07-25T01:00:00.000Z",
      },
    ];
    const result = processAndAnalyzeWeatherData(mockData);
    expect(result.temperature.high).toBe(30);
    expect(result.temperature.low).toBe(20);
    expect(result.humidity.high).toBe(80);
    expect(result.humidity.low).toBe(70);
    expect(result.wind_speed.high).toBe(20);
    expect(result.wind_speed.low).toBe(10);
    expect(result.summary).toBeDefined();
  });

  it("should handle empty data array", () => {
    expect(() => processAndAnalyzeWeatherData([])).toThrow();
  });
});
