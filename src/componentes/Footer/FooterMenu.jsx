import '../../hojas-de-estilo/Styles-Footer/FooterMenu.css';

function FooterMenu({ title, nav1, nav2, nav3, nav4, nav5, nav6 }) {
    return (
        <div className="container-footerMenu">
            <p>{title}</p>
            <div className="navFooter">
                <p>{nav1}</p>
                <p>{nav2}</p>
                <p>{nav3}</p>
                <p>{nav4}</p>
                <p>{nav5}</p>
                <p>{nav6}</p>
            </div>
        </div>
    )
}

export default FooterMenu;