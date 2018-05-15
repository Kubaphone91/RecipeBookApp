import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, App } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ShoppingListService } from '../../services/shopping-list.service';
import { ShoppingListPage } from './../shopping-list/shopping-list';



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
              private appCtrl: App,
              private shoppingService: ShoppingListService) {
  }

  private onExit() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(ShoppingListPage);
  }

  ionViewDidLoad() {
    this.itemEdit = this.navParams.get('itemName');
    this.itemAmountEdit = this.navParams.get('itemAmount');
    this.itemIndex = this.navParams.get('indexNumber');
  }

  onUpdateItem(form: NgForm) {
    this.shoppingService.updateItem(form.value.ingredientNameEdit, form.value.amountEdit, this.itemIndex);
    form.reset();
    this.onExit();
  }

}
