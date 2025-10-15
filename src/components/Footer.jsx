import footerData from "../mockData/footerData";

export const FooterHeader = ({footerHeaderData}) => {
    const {
        header,
        button: {href, title},
    } = footerHeaderData; 
    
    return(
        <>
        <h1 className="footer_header">{header}</h1>
        <button href={href} className="header_button">
            {title}
        </button>
        </>
    );

};

export const FooterLeftInfo = ({footerInfoData}) => {
    return footerInfoData.slice(1).map((item) => (
        <li className="info_item">
            {item.title}
        </li>
    ));
};

export const FooterLeft = ({footerLeftData}) => {
    return (
        <>
        <li className="info_left_header">
            <img className="info_left_header" src={footerLeftData[0].image.src} alt={footerLeftData[0].image.src}/>
        </li>
        <FooterLeftInfo footerInfoData={footerLeftData}/>
        </>
    );
};

export const FooterListInfo = ({listData}) => {
    return listData.slice(1).map((item) => (
        <li className="info_item">
            <a href={item.href} class="lined_cta footer_cta">{item.title}</a>
        </li>
    ));
};

export const FooterList = ({list}) => {
    return (
    <>
        <li className="info_header">
            {list[0].header}
        </li>
        <FooterListInfo listData = {list}/>
    </> 
    );
};

export const FooterRight = ({footerRightData}) => {
    return footerRightData.map((list) => (
        <ul className="info_list">
            <FooterList list = {list}/>
        </ul>
    ));
};

export const FooterInfo = ({footerInfoData}) => {
    const{
        footerLeftData,
        footerRightData,
    } = footerInfoData;

    return (
        <>
        <ul className="info_left_list">
            <FooterLeft footerLeftData={footerLeftData}/>
        </ul>
        <div className="info_right">
            <FooterRight footerRightData={footerRightData}/>
        </div>;      
        </>
    );
};

const Footer = () => {
    const {footerHeaderData, footerInfoData, footerRightsReservedData,} = 
    footerData;

    return (
        <>
         <div className="footer_section_header">
            <FooterHeader footerHeaderData={footerHeaderData}/>
         </div>
         <div className="footer_section_info">
            <FooterInfo footerInfoData={footerInfoData}/>
         </div>
         <p className="rights_reserved">{footerRightsReservedData}</p>
        </>
    );

};

export default Footer;
