<article>
	<form ng-submit="save(1);">
		<label ng-show="item.brand !== undefined">
			Бренд
			<select ng-model="item.brand">
				<option ng-if="b.target === img" ng-repeat="b in brands" value="{{b._id}}">{{b.article}}</option>
			</select><br>
		</label>
		<label ng-show="item.target !== undefined">
			Чей бренд
			<select ng-model="item.target">
				<option value="door">door</option>
				<option value="floor">floor</option>
			</select><br>
		</label>
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
			<input type="file" id="bg" accept="image/jpeg,image/jpg" onchange="angular.element(this).scope().bg()"><br>
		</label>
		<label ng-show="item.image !== undefined">
			Картинка
			<input type="file" id="image" accept="image/png" onchange="angular.element(this).scope().image()"><br>
		</label>
		<input type="submit" value="СОХРАНИТЬ">
	</form>
	<span ng-show="item.bg">ФОН:<img ng-src="rooms/{{img}}s/{{item.bg}}" width="320px"></span>
	<span ng-show="item.image">КАРТИНКА:<img ng-src="rooms/{{img}}s/{{item.image}}" width="320px"></span>
</article>