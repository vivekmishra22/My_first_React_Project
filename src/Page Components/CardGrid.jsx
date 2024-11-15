import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function CardGrid() {
  return (
    <div className="container mt-5">
      <h2>Card Grid with 2 Rows and 3 Columns</h2>
      <Row>
        {/* Row 1 */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                This is a card in the first row, first column.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                This is a card in the first row, second column.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>
                This is a card in the first row, third column.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Row 2 */}
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>
                This is a card in the second row, first column.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Card 5</Card.Title>
              <Card.Text>
                This is a card in the second row, second column.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Card 6</Card.Title>
              <Card.Text>
                This is a card in the second row, third column.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CardGrid;
