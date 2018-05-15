import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ShoppingListService } from '../../services/shopping-list.service';

@IonicPage()
@Component({
  selector: 'page-edit-list',
  templateUrl: 'edit-list.html',
})
export class EditListPage {
  itemEdit: string;
  itemAmountEdit: number;
  itemIndex: number;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams,
              private shoppingService: ShoppingListService) {
  }

  private onExit() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    this.itemEdit = this.navParams.get('itemName');
    this.itemAmountEdit = this.navParams.get('itemAmount');
    this.itemIndex = this.navParams.get('indexNumber');
    console.log(this.itemEdit, this.itemAmountEdit, this.itemIndex);
  }

  onUpdateItem(form: NgForm) {
    this.shoppingService.updateItem(form.value.ingredientNameEdit, form.value.amountEdit, this.itemIndex);
    form.reset();
    this.onExit();
  }

}
