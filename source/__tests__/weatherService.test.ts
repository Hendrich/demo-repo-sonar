import { getWeatherForCity } from "../../weather-report/source/weatherService";

describe("getWeatherForCity", () => {
  it("should return weather data for valid city", async () => {
    const city = "Jakarta";
    const result = await getWeatherForCity(city);
    expect(result).toBeDefined();
    // Tambahkan expect sesuai struktur data yang diharapkan
  });

  it("should throw error for invalid city", async () => {
    await expect(getWeatherForCity("")).rejects.toThrow();
  });
});
