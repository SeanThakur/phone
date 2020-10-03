import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createProduct} from '../../redux/actions/productActions';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

function Landing(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [features, setFeatures] = useState('');
    const [color, setColor] = useState('');

    const handleNameChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handlePriceChange = (e) => {
        e.preventDefault();
        setPrice(e.target.value);
    }

    const handleColorChange = (e) => {
        e.preventDefault();
        setColor(e.target.value);
    }

    const handleFeaturesChange = (e) => {
        e.preventDefault();
        setFeatures(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const products = {
            name,
            price,
            color,
            features
        }
        props.createProduct(products, window.location);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={12}> 
                        <Card style={{padding: "60px", margin: "10px", marginTop: "60px"}}>
                            <Grid item xs={12}>
                            <Typography variant="h5" style={{ letterSpacing: "2px", fontWeight:"bold"}}>
                                CREATE PRODUCT
                            </Typography>
                            <br />
                            </Grid>
                            <br />
                            <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <br />
                                    <TextField
                                        required
                                        id="name"
                                        name="name"
                                        label="Product name"
                                        fullWidth
                                        color="secondary"
                                        variant="outlined"
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <br />
                                    <TextField
                                        required
                                        id="price"
                                        name="price"
                                        label="Product price"
                                        fullWidth
                                        color="secondary"
                                        variant="outlined"
                                        value={price}
                                        onChange={handlePriceChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <br />
                                    <TextField
                                        required
                                        id="color"
                                        name="color"
                                        label="Product color"
                                        fullWidth
                                        color="secondary"
                                        variant="outlined"
                                        value={color}
                                        onChange={handleColorChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <br />
                                    <TextField
                                        required
                                        id="features"
                                        name="features"
                                        label="Product features"
                                        fullWidth
                                        color="secondary"
                                        variant="outlined"
                                        value={features}
                                        onChange={handleFeaturesChange}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Button 
                                color="secondary" 
                                type="submit"
                                variant="outlined" 
                                style={{margin: '20px',marginTop: "30px", letterSpacing: "2px",float: "right" }}
                                onSubmit={handleSubmit}
                            >
                                Submit
                            </Button>
                            </form>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    )
}

Landing.propTypes = {
    error: PropTypes.object.isRequired,
    createProduct: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    error: state.error
})

export default connect(mapStateToProps, {createProduct})(Landing);