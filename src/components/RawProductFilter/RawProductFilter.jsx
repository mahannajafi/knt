import "./RawProductFilter.css"
import SortIcon from '@mui/icons-material/Sort';

function RawProductFilter() {
    return (
        <div className='rawProductFilter'>
            <div className="sortProducts">
                <div className="filterProducts"><SortIcon className="sortIcon" /><div>ترتیب نمایش :</div></div>
                <div className="FilterProductsTitle">ارزان ترین</div>
                <div className="FilterProductsTitle">گران ترین</div>
                <div className="FilterProductsTitle">جدید ترین</div>
            </div>
        </div>
    )
}

export default RawProductFilter;