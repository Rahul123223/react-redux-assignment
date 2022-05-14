import { Box } from "@material-ui/core";
import { TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
import './css/checkpage.css';
import { MenuItem } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
export const Pagecheck = () => {
    const { total, item } = useSelector((state) => state.cart);
    // let Tsum = Math.ceil(state.total * (3 / 100)) + state.total;
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(cart_total(total));

    // }, [])
    const navigate = useNavigate();
    return (
        <>
            {/* //so by usign the variant property we can apply different types of variant in the form 
        this is of the types outlined filled and standard*/}
            <div id="check_container">
                <div>
                    <h2>Shiping information</h2>
                    <Stack
                        sx={{
                            width: '42ch',
                            margin: "auto"

                        }}
                        spacing={3}
                    >
                        <TextField
                            id="outlined-basic"
                            color="secondary"
                            placeholder="First Name"
                            required
                        />
                        <TextField
                            placeholder="Last Name"
                            variant="outlined"
                            color="secondary"
                        />
                        <TextField
                            placeholder="Address"
                            variant="outlined"
                            color="secondary"
                        />
                        <TextField
                            placeholder="city"
                            variant="outlined"
                            color="secondary"
                        />
                        <Select
                            label="State"
                            id="state"
                            placeholder="State"
                            required="true"
                        >
                            <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                            <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                            <MenuItem value={"MP"}>MP</MenuItem>
                            <MenuItem value={"Andhra"}>Andhra Pradesh</MenuItem>
                            <MenuItem value={"jharkhand"}>Jharkhand</MenuItem>
                        </Select>
                        <h2>Contact Infomation</h2>
                        <TextField
                            id="outlined-basic"
                            color="secondary"
                            placeholder="Email"
                            required
                        />
                        <TextField
                            placeholder="Phone"
                            variant="outlined"
                            color="secondary"
                            required
                        />

                    </Stack>
                </div>
                <div className="total_pay">
                    <h3>Your order</h3>
                    <hr />
                    <div>
                        <div>
                            <h4>Product</h4>
                        </div>
                        <div>
                            <h4>SubTotal</h4>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div><h4>{item}</h4></div>
                        <div><h4>{total}</h4></div>
                    </div>
                    <hr style={{border:"ridge"}} />
                    <Button variant="contained" color="secondary"
                        sx={{
                            margin:3,
                        }}
                        
                        onClick={() => navigate('/payment')}
                    >
                       Place Order
                    </Button>

                </div>
            </div>
        </>
    )
}