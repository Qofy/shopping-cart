import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  price: number;
  imgUrl: string;
  name: string;
}

export function StoreItem({ id, price, imgUrl, name }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromQuantity: removeItem } = useShoppingCart()
  const quantity = getItemQuantity(id);
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
              <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Add to Cart</Button>
            ) : <div className="d-flex align-items-center justify-content-center" style={{gap: ".5rem"}}>
                <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}>
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>

                  <div>
                    <span>{quantity} in cart</span>
                  </div> 
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button variant="danger" size="sm" onClick={() => removeItem(id)}>Remove</Button>
              </div>}
          </div>
      </Card.Body>
    </Card>
  )
}