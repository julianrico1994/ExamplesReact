import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import { removeFromCart } from '../../actionCreators';
import { connect } from 'react-redux';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

// class ShoppingCart extends Component  // --> puede ser asi o comjo funcion:

// (props) ---> ({cart, removeForCart})  --> destructurar un argumento un objeto
// https://www.youtube.com/watch?v=dAm3jicYvR8&list=PLxyfMWnjW2kuyePV1Gzn5W_gr3BGIZq8G&index=4
const ShoppingCart = (props) => {
  return (
    <Panel header="Shopping Cart">
      <Table fill>
        <tbody>
          {props.cart.map(product =>
            <tr key={product.id}>
              <td>{product.name}</td>
              <td className="text-right">${product.price}</td>
              <td className="text-right">
                <Button
                  bsSize="xsmall"
                  bsStyle="danger"
                  onClick={() => props.removeFromCart(product)}>
                  <Glyphicon glyph="trash" />
                </Button></td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={styles.footer}>
              Total: ${props.cart.reduce((sum, product) => sum + product.price, 0)}
            </td>
          </tr>
        </tfoot>
      </Table>
    </Panel>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product) {
      dispatch(removeFromCart(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
