export default function Header(props) {
    //props are read only
    return (
        <header>
            <h1> {props.titulo}</h1>
        </header>
    )
}