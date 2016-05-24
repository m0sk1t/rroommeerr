<article>
	<form ng-submit="save();">
		<input type="text" name="" ng-show="item.article !== undefined" placeholder="Наименование" ng-model="item.article"><br>
		<input type="text" name="" ng-show="item.assemble !== undefined" placeholder="Коллекция" ng-model="item.assemble"><br>
		<input type="text" name="" ng-show="item.decor !== undefined" placeholder="Декор" ng-model="item.decor"><br>
		<input type="submit" name="" value="Save">
	</form>
</article>