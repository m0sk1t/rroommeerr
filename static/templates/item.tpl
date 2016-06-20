<article>
	<form ng-submit="save();">
		<label ng-show="item.coll !== undefined">
			Коллекция
			<select ng-model="item.coll">
				<option ng-repeat="c in coll" value="{{c._id}}">{{c.article}}</option>
			</select><br>
		</label>
		<label ng-show="item.model !== undefined">
			Модель
			<select ng-model="item.model">
				<option ng-repeat="m in model" value="{{m._id}}">{{m.article}}</option>
			</select><br>
		</label>
		<label ng-show="item.gamma !== undefined">
			Гамма
			<select ng-model="item.gamma">
				<option ng-repeat="g in gamma" value="{{g._id}}">{{g.article}}</option>
			</select><br>
		</label>
		<label ng-show="item.color !== undefined">
			Цвет
			<input type="color" placeholder="Цвет" ng-model="item.color"><br>
		</label>
		<label ng-show="item.alias !== undefined">
			Псевдоним
			<input type="text" placeholder="alias" ng-model="item.alias"><br>
		</label>
		<label ng-show="item.article !== undefined">
			Наименование
			<input type="text" placeholder="Наименование" ng-model="item.article"><br>
		</label>
		<label ng-show="item.bg !== undefined">
			Фон
			<input type="file" id="bg" accept="jpg" onchange="angular.element(this).scope().bg()"><br>
		</label>
		<label ng-show="item.image !== undefined">
			Картинка
			<input type="file" id="image" accept="png" onchange="angular.element(this).scope().image()"><br>
		</label>
		<input type="submit" value="Save">
	</form>
	<img ng-show="item.bg" ng-src="rooms/{{type}}s/{{item.bg}}" width="320px">
	<img ng-show="item.image" ng-src="rooms/{{type}}s/{{item.image}}" width="320px">
</article>