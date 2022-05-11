<><div className="col s5 offset-s1">
    <h3>{c.name}</h3>
    <div className="row">
        <div className="col s6">
            <p>
                <span>Native Name:</span> {c.nativeName}
            </p>
            <p>
                <span>Population:</span> {c.population.toLocaleString()}
            </p>
            <p>
                <span>Region:</span> {c.region}
            </p>
            <p>
                <span>Sub Region:</span> {c.subregion}
            </p>
            <p>
                <span>Capital:</span>{" "}
                {c.capital ? `${c.capital}` : "No capital city"}
            </p>
        </div>
        <div className="col s6">
            <p>
                <span>Top Level Domain:</span> {c.topLevelDomain}
            </p>
            <div>
                <span>Currencies: </span>
                {!c.currencies
                    ? "No currency"
                    : c.currencies.map(({ name }) => name)}
            </div>

            <div>
                <p>
                    <span>Languages: </span>
                    {c.languages.map(({ name }, index) => (
                        <span style={{ fontWeight: "normal" }} key={index}>
                            {index !== c.languages.length - 1
                                ? `${name}, `
                                : `${name}`}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    </div>
</div><div>
        <p className="col s5 offset-s7">
            <span>Border Countries: </span>
            {!c.borders
                ? "No country around"
                : c.borders.map((country, index) => (
                    <span style={{ fontWeight: "normal" }} key={index}>
                        {index !== c.borders.length - 1
                            ? `${country}, `
                            : `${country}`}
                    </span>
                ))}
        </p>
    </div></>