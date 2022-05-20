import './css/payment.css';
import { TextField,Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
export const Payment = () => {
    const navigate = useNavigate();
    return (
        <div id="payment">
            <div>
                <h3>DEBIT/CREDIT CARD</h3>
                master cart,rupay and many more...
            </div>
            <div>
                Add new Debit/credit card
                <Stack
                    sx={{
                        margin: "auto",
                        marginTop:2

                    }}
                    spacing={3}
                >
                    <TextField
                        id="outlined-basic"
                        color="secondary"
                        placeholder="Card no"
                        required
                    />
                    <TextField
                        placeholder="Expiry"
                        variant="outlined"
                        color="secondary"
                    />
                    <TextField
                        placeholder="cvv"
                        variant="outlined"
                        color="secondary"
                    />
                    <TextField
                        placeholder="Name"
                        variant="outlined"
                        color="secondary"
                    />


                </Stack>
                <Button variant="contained" color="secondary"
                        sx={{
                            margin:2,
                        }}
                        onClick={()=>navigate('/otp')}
                        
                    >
                      BUY NOW
                    </Button>
            </div>


        </div>

    )

}