class Author {
  author = {
    name: 'Alex',
    lastname: 'Contreras'
  }
  constructor() {
  }

}

class Search extends Author {
  items = []
  categories = []
  constructor() {
    super();
  }

  setItems(item) {
    this.items.push(item)
  }

  setCategory(category) {
    this.categories.push(category);
  }

}

class SearchItem {

  price = {
    currency: null,
    amount: null,
    decimals: null
  }
  id = ''
  title = ''
  picture = ''
  condition = ''
  free_shipping = false
  address = ''
  category_id = ''

  constructor() { }

  setPrice(currency, amount, decimals) {
    this.price.currency = currency;
    this.price.amount = amount,
      this.price.decimals = decimals !== undefined ? decimals : '00';
  }

  setId(id) {
    this.id = id;
  }
  setTitle(title) {
    this.title = title;
  }
  setPicture(picture) {
    this.picture = picture;
  }
  setCondition(condition) {
    this.condition = condition;
  }
  setFreeShipping(free_shipping) {
    this.free_shipping = free_shipping;
  }
  setAddress(address) {
    this.address = address;
  }
  setCategoryId(category_id) {
    this.category_id = category_id;
  }

}

class ItemById extends Author {
  item = {
    id: '',
    title: '',
    price: {
      currency: '',
      amount: null,
      decimals: null
    },
    picture: '',
    condition: '',
    free_shipping: false,
    sold_quantity: null,
    description: '',
    category_id: ''
  }

  constructor() {
    super();
  }

  setId(id) {
    this.item.id = id;
  }
  setTitle(title) {
    this.item.title = title;
  }

  setPrice(currency, amount, decimals) {
    this.item.price.currency = currency;
    this.item.price.amount = amount,
    this.item.price.decimals = decimals !== undefined ? decimals : '00';
  }

  setPicture(picture) {
    this.item.picture = picture;
  }
  setCondition(condition) {
    this.item.condition = condition;
  }
  setFreeShipping(free_shipping) {
    this.item.free_shipping = free_shipping;
  }
  setQuantity(quantity) {
    this.item.sold_quantity = quantity;
  }
  setDescription(description) {
    console.log(description);
    this.item.description = description;
  }
  setCategoryId(category_id) {
    this.category_id = category_id;
  }
}

module.exports = { ItemById, Search, SearchItem };