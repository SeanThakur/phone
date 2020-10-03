import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {productSearch} from '../../redux/actions/productActions';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardGrid2: {
      paddingBottom: theme.spacing(10),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
  }));

function searchProduct(props) {
    const classes = useStyles();

    const [product, setProduct] = useState('');

    const handleProductChange = (e) => {
        e.preventDefault();
        setProduct(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.productSearch(product);
    }

    let search;

    if(props.search.product !== null)
    {
        search = (
            <React.Fragment>
              <Grid container spacing={4}>
                {props.search.product.map((product) => (
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
    }else {
        search = <p>not found</p>
    }
    return (
        <div>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={handleSubmit}>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={product}
                onChange={handleProductChange}
                />
            </form>
          </div>
            <br />
            {
                search
            }
        </div>
    )
}

searchProduct.propTypes = {
    error: PropTypes.object.isRequired,
    search: PropTypes.object.isRequired,
    productSearch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    error: state.error,
    search: state.search
})

export default connect(mapStateToProps, {productSearch})(searchProduct);

