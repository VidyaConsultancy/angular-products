#### Attribute Binding
https://v10.angular.io/guide/attribute-binding

### Built-in attribute directives
#### ngStyle
https://v10.angular.io/api/common/NgStyle

#### ngClass
https://v10.angular.io/api/common/NgClass

### Built-in structural directives
#### ngFor
https://v10.angular.io/api/common/NgForOf

#### ngIf
https://v10.angular.io/api/common/NgIf

### Built in pipes
- CurrencyPipe
- DatePipe
- DecimalPipe
- UppercasePipe
- LowercasePipe
- TitalcasePipe
- AsyncPipe
- JSONPipe

### Service ProvidedIn value
Eagerly Loaded Modules
AppModule - instanceO
UserModule - instanceO
AuthModule - instanceO

Lazily Loaded Modules
ProductsModule - instanceA
CartModule - instanceB
CheckoutModule - instanceC

### Generate a module with routing
    This command will generate a auth module, auth routing module, and auth component. And register it in app routing module with auth as a route path.
`ng g m auth --routing --routing-scope=Child --route=auth --module=app`