<article>
	<form ng-submit="save();">
		<input type="color" ng-show="item.color !== undefined" placeholder="Цвет" ng-model="item.color"><br>
		<input type="text" ng-show="item.article !== undefined" placeholder="Наименование" ng-model="item.article"><br>
		<input type="text" ng-show="item.assemble !== undefined" placeholder="Коллекция" ng-model="item.assemble"><br>
		<input type="text" ng-show="item.decor !== undefined" placeholder="Декор" ng-model="item.decor"><br>
		<input type="file" ng-show="item.image !== undefined" onchange="angular.element(this).scope().image()"><br>
		<input type="submit" value="Save">
	</form>
	<img ng-src="rooms/{{item.image}}">
</article>