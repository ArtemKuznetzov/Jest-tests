async function convert<T extends {}>(base: string, destination: keyof T) {
    try {
        const result = await fetch(
            `https://api.exchangeratesapi.io/latest?base=${base}`,
        );
        const data = await result.json();
        return data.rates[destination];
    } catch (e) {
        return null;
    }
}

export { convert };
