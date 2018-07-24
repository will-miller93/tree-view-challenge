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


