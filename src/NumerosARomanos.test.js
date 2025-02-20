import ConvertirARomanos from "./NumerosARomanos";
describe("Convertir a Numeros Romanos", () => {
    it("Deberia convetir el 1 en I", () => {
        expect(ConvertirARomanos(1)).toEqual("I");
    })
    it("Deberia convetir el 2 en II", () => {
        expect(ConvertirARomanos(2)).toEqual("II");
    })
    it("Deberia convetir el 3 en III", () => {
        expect(ConvertirARomanos(3)).toEqual("III");
    })
    it("Deberia convetir el 4 en IV", () => {
        expect(ConvertirARomanos(4)).toEqual("IV");
    })
    it("Deberia convetir el 5 en V", () => {
        expect(ConvertirARomanos(5)).toEqual("V");
    })
    it("Deberia convetir el 6 en VI", () => {
        expect(ConvertirARomanos(6)).toEqual("VI");
    })
    it("Deberia convetir el 7 en VII", () => {
        expect(ConvertirARomanos(7)).toEqual("VII");
    })
    it("Deberia convetir el 8 en VIII", () => {
        expect(ConvertirARomanos(8)).toEqual("VIII");
    })
    it("Deberia convetir el 9 en IX", () => {
        expect(ConvertirARomanos(9)).toEqual("IX");
    })
    it("Deberia convetir el 10 en X", () => {
        expect(ConvertirARomanos(10)).toEqual("X");
    })
    it("Deberia convetir el 13 en XIII", () => {
        expect(ConvertirARomanos(13)).toEqual("XIII");
    })
    it("Deberia convetir el 20 en XX", () => {
        expect(ConvertirARomanos(20)).toEqual("XX");
    })
    it("Deberia convetir el 30 en XXX", () => {
        expect(ConvertirARomanos(30)).toEqual("XXX");
    })
    it("Deberia convetir el 40 en XL", () => {
        expect(ConvertirARomanos(40)).toEqual("XL");
    })
})