interface InterfaceCard {
    id: number
}

const Card = ({ id }: InterfaceCard) => {
    return (
        <h1>Card</h1>
    );
}

export default Card;