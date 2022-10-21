import './index.css';

function Classes() {
    const color = 'blue';
    const dangerous = true;
    return (
        <div>
            <h2>Classes</h2>
            <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-blue'} wd-fg-black wd-padding-10px`}>
            Dynamic Blue background</div>
        </div>
    );
}
export default Classes;
