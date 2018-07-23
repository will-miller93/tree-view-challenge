import React from 'react';
import Row from '../Grid/row';
import Col from '../Grid/col';
import List from '../list/list';
import ListItem from '../listItem/listItem';
import './leaf.css';

const Leaf = () => (
    <Row>
        <Col size="md-3">
            <List>
                <ListItem>
                    <button type="button" className="btn btn-info leafBtn" disabled> leaf test </button>
                </ListItem>
            </List>
        </Col>
    </Row>
);

export default Leaf;

{/* <Row>
<Col size="md-6">
  <Branch>
    <Row>
      <Col size="md-3">
        <ul> 
          <li>
            <Leaf />
          </li>
          <li>
            <Leaf />
          </li>
          <li>
            <Leaf />
          </li>
          <li>
            <Leaf />
          </li>
          <li>
            <Leaf />
          </li>
        </ul>
      </Col>
    </Row>
  </Branch>
</Col>
</Row> */}
