import '../../hojas-de-estilo/Styles-Footer/FooterMenu.css';

function FooterMenu({ title, nav1, nav2, nav3, nav4, nav5, nav6 }) {
    return (
        <div className="container-footerMenu">
            <p className='titleFooter' >{title}</p>
            <span>{nav1}</span>
            <span>{nav2}</span>
            <span>{nav3}</span>
            <span>{nav4}</span>
            <span>{nav5}</span>
            <span>{nav6}</span>
        </div>
    )
}

export default FooterMenu;