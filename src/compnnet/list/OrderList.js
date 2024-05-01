import React from "react";
import './OrderList.css'

function OrderList(){

    return(
        <div className="new-watch">
            <label>Watches</label>
             <select
                        className="course-selection"
                        defaultValue=""
                        required>
                        <option value="" disabled>
                            Your order Watches
                        </option>
                        <option value="clothes">clothes</option>
                        <option value="Socks">Socks</option>
                        <option value="shoes">shoes</option>
                        
                    </select>

                <div className="new-registration__actions">
                <button type="button">Cancel</button>
                </div>
        </div>
    );
}

export default OrderList;