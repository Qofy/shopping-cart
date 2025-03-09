import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  price: number;
  imgUrl: string;
  name: string;
}

export function StoreItem({ price, imgUrl, name}: StoreItemProps) {
  const quantity = 0;
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imgUrl} height="200px" style={{objectFit: "cover"}}/>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button className="w-100">+ Add to Cart</Button>
            ) : null}
          </div>
      </Card.Body>
    </Card>
  )
}