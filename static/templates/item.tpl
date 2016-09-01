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
		<label ng-show="item.description !== undefined">
			Описание
			<textarea cols="30" rows="10" ng-model="description"></textarea>
			<input type="button" ng-click="generate_description()" value="Сформировать описание">
			<table ng-show="item.description.length">
                <tr ng-repeat="d in item.description track by $index">
                    <td>{{d_names[$index]}}</td>
                    <td>{{d}}</td>
                </tr>
			</table>
		</label>
		<label ng-show="item.bg !== undefined">
			Фон
			<input type="file" id="bg" accept="image/jpeg,image/jpg" onchange="angular.element(this).scope().bg()"><br>
		</label>
		<label ng-show="item.image !== undefined">
			Картинка
			<span
	 			accept="image/*"
				ngf-multiple="false"
                class="choose-button"
				ngf-pattern="'image/*'"
				ngf-select="image($files)"
			>
				выбрать
			</span><br>
		</label>
		<label ng-show="item.images !== undefined">
			Выберите интерьер для добавления картинки
			<p
               class="room-item"
               ng-repeat="r in rooms track by $index"
               ng-class="{active:room._id === r._id}"
               ng-click="room._id = r._id; room.index = $index;"
           >
				{{r.article}}
			</p>
				<span
		 			accept="image/*"
					ngf-multiple="false"
                    class="choose-button"
					ngf-pattern="'image/*'"
					ngf-select="room_image($files);"
				>
					выбрать
				</span>
		</label>
		<input type="submit" value="СОХРАНИТЬ">
	</form>
	<span ng-show="item.bg">ФОН:<img ng-src="rooms/{{img}}s/{{item.bg}}" width="320px"></span>
	<span ng-show="item.image">КАРТИНКА:<img ng-src="rooms/{{img}}s/{{item.image}}" width="320px"></span>
	<span ng-show="item.images">
		КАРТИНКИ:
		<img ng-src="rooms/{{img}}s/{{i.image}}" width="320px" ng-repeat="i in item.images">
	</span>
</article>
