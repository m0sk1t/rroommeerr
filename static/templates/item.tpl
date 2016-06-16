<article>
	<form ng-submit="save();">
		<input type="color" ng-show="item.color !== undefined" placeholder="Цвет" ng-model="item.color"><br>
		<input type="text" ng-show="item.alias !== undefined" placeholder="alias" ng-model="item.alias"><br>
		<input type="text" ng-show="item.article !== undefined" placeholder="Наименование" ng-model="item.article"><br>
		<input type="text" ng-show="item.collection !== undefined" placeholder="Коллекция" ng-model="item.collection"><br>
		Фон:<input type="file" id="bg" accept="jpg" ng-show="item.bg !== undefined" onchange="angular.element(this).scope().bg()"><br>
		Картинка:<input type="file" id="image" accept="png" ng-show="item.image !== undefined" onchange="angular.element(this).scope().image()"><br>
		<input type="submit" value="Save">
	</form>
	<img ng-if="item.bg" ng-src="rooms/{{type}}s/{{item.bg}}" width="320px">
	<img ng-if="item.image" ng-src="rooms/{{type}}s/{{item.image}}" width="320px">
</article>