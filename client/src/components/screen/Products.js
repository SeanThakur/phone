import React ,{useEffect} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getProducts} from "../../redux/actions/productActions";

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  cardGrid2: {
    paddingBottom: theme.spacing(10),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

function Products(props) {
    const classes = useStyles();

    useEffect(() => {
      props.getProducts();
    }, []);

    let mobileProducts;

    if(props.product.isLoading === true && props.product.products === null) {
      mobileProducts = <p>Loading....</p>
    }
    else {
      if(props.product.products !== null)
      {
        if(props.product.products.length > 0) {
        mobileProducts = (
          <React.Fragment>
            <Grid container spacing={4}>
              {props.product.products.map((product) => (
                <Grid item key={product._id} xs={12} md={4} sm={6}>
                  <Card className={classes.card}>
                      <CardHeader
                          title={product.name}
                          subheader={product.color}
                      />
                      <CardContent>
                          <Typography variant="h6" component="p">
                            {product.features}
                          </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                          <Typography style={{ fontWeight: "bold",paddingBottom: "10px", paddingLeft: "10px", fontSize:"15px", letterSpacing:"1px", marginRight: "auto" }}>
                              {product.price}
                          </Typography>
                      </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </React.Fragment>
        );
        }
      }else {
        mobileProducts = (
          <React.Fragment>
            <p>No products found</p>
          </React.Fragment>
        );
      }
    }

    return (
        <div style={{marginTop: '60px'}}>
        <Container  className={classes.cardGrid2} maxWidth="lg">
          {
            mobileProducts
          }
        </Container>
        </div>
      );
}

Products.prototype = { 
  error: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  error: state.error,
  product: state.product
})

export default connect(mapStateToProps, {getProducts})(Products);
