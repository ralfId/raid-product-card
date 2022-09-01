# raid-produc-card

Este es un proyecto para aprender a desplegar a NPM

### Rafael Ibañez Diego

## Ejemplo
```
import { ShoppingCard, CardImage, CardTitle, CardButtons} from '';
```

```
<ShoppingCard key={product.id} product={product} initialValues={{ count: 4, //maxcount: 15 }}>
  {
    ({ reset, increasBy, count, isMaxCountReached }) => (
      <>
        <CardImage  />
        <CardTitle  />
        <CardButtons  />
      </>
    )
  }

</ShoppingCard>

```