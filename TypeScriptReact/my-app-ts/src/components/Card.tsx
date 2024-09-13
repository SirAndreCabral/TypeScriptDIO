interface InterfaceCard {
    id: number,
    paragraph: string,
    details: string
}

const Card = ({ id, paragraph, details }: InterfaceCard) => {
    return (
        <>
        <h1>Card: {id}</h1>
        <p>Paragrafo: {paragraph}</p>
        <p>Detalhes: {details}</p>
        </>
    );
}

export default Card;