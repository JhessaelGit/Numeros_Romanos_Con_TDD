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
})