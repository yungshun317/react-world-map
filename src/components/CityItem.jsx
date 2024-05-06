import * as styles from "./CityItem.module.css";

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(new Date(date));

function CityItem({city}) {
    console.log(city);
    /*
    Object
        cityName: "Lisbon"
        country: "Portugal"
        date: "2027-10-31T15:59:59.138Z"
        emoji: "🇵🇹"
        id: "73930385"
        notes: "My favorite city so far!"
        position: {lat: 38.727881642324164, lng: -9.140900099907554}
        [[Prototype]]: Object
     */
    const { cityName, emoji, date } = city;

    return (
        <li className={styles.cityItem}>
            <span className={styles.emoji}>{}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>{formatDate(date)}</time>
            <button className={styles.deleteBtn}>&times;</button>
        </li>
    );
}

export default CityItem;