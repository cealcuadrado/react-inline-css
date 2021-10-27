import './Layout.css';

function Layout() {
    return (
        <div className="layout">
            <h3 style={{color:'red'}}>This is the layout</h3>
            <p style={{ textTransform: 'uppercase', color: 'blue' }}>Hola, mundo!</p>
            
            <div style={{borderRadius:'15px',border:'1px solid black'}}>
                <p>Este es un elemento DIV</p>
            </div>
        </div>
    );
}
export default Layout;