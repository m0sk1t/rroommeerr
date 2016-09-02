<article>
	<section class="choice-menu">
		<div class="choice-menu__menu-items">
			<span
				class="choice-menu__menu-item"
				ng-click="show_menu_items('choose_interior')"
				ng-class="{'choice-menu__menu-item_active': opt.choose_interior}"
			>
				Интерьер
			</span>
			<span
				class="choice-menu__menu-item"
				ng-click="show_menu_items('choose_color')"
				ng-class="{'choice-menu__menu-item_active': opt.choose_color}"
			>
				Цвет стен
			</span>
			<span
				class="choice-menu__menu-item"
				ng-class="{'choice-menu__menu-item_active': opt.choose_floor}"
				ng-click="show_menu_items('choose_floor'); select_floor_collections();"
			>
				Пол
			</span>
			<span
				class="choice-menu__menu-item"
				ng-class="{'choice-menu__menu-item_active': opt.choose_door}"
				ng-click="show_menu_items('choose_door'); select_door_collections();"
			>
				Двери
			</span>
		</div>
		<div class="choice-menu__items-lists">
			<div
				class="choice-menu__item-list interior"
				ng-show="opt.choose_interior"
			>
				<ul>
					<li
						ng-repeat="i in interiors"
						ng-click="opt.interior = i;"
						ng-class="{active: opt.interior.alias === i.alias}"
					>
						<img ng-src="rooms/interiors/{{i.bg}}">
					</li>
				</ul>
			</div>
			<div
				class="choice-menu__item-list"
				ng-show="opt.choose_color"
			>
				<div
					class="color"
					ng-repeat="c in colors"
					ng-click="opt.color = c;"
					style="background-color: {{c}};"
					ng-class="{active: opt.color === c}"
				>
				&nbsp;
				</div>
			</div>
			<div
				class="choice-menu__item-list"
				ng-show="opt.choose_floor"
			>
				<select ng-model="opt.floor_brand" ng-change="select_floor_collections();">
					<option value="">Все декоры</option>
					<option value="{{br._id}}" ng-repeat="br in brands">{{br.article}}</option>
				</select>
				<select ng-model="opt.floorcoll" ng-show="opt.floor_brand">
					<option value="">Выберите коллекцию</option>
					<option value="{{fc._id}}" ng-repeat="fc in opt.floor_collections">{{fc.article}}</option>
				</select>
				<div class="models">
					<div
						class="model-item"
						ng-show="f.brand && f.coll"
						ng-class="{'selected': opt.floor._id === f._id}"
						ng-repeat="f in floors | sort_by:opt.floor_brand:opt.floorcoll"
						ng-click="opt.floor = f; opt.floor.image = select_floor_image();"
					>
						<img ng-src="rooms/floors/{{f.bg}}">
						<span>
							{{f.article}}
						</span>
					</div>
				</div>
			</div>
			<div
				class="choice-menu__item-list"
				ng-show="opt.choose_door"
			>
				<div class="models">
					<div
						class="model-item"
						ng-click="opt.door = d;"
						ng-repeat="d in doors | orderBy: d.coll"
						ng-class="{'selected': opt.door._id === d._id}"
					>
						<img ng-src="rooms/doors/{{d.bg}}">
						<span>
						    <b>{{get_collection_name(d.coll)}}</b>
						    <div>{{get_model_name(d.model)}}</div>
							<div>{{d.article}}</div>
						</span>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="display" ng-click="show_menu_items();">
		<div class="section-layer wall" style="background-color: {{opt.color}}; background-image: url(/rooms/wall.png);"></div>
		<div class="section-layer floor" style="background-image: url(/rooms/floors/{{opt.floor.image}});"></div>
		<div class="section-layer interior" style="background-image: url(/rooms/interiors/{{opt.interior.image}});"></div>
		<div class="section-layer door" style="background-image: url(/rooms/doors/{{opt.door.image}});"></div>
	</section>
	<section class="floor-description" ng-show="opt.show_floor_description" ng-click="opt.show_floor_description = !1">
       <div class="container">
       		<h3 class="floor-header">{{opt.floor.article}}</h3>
            <table>
                <tr class="floor-header" ng-repeat="d in opt.floor.description track by $index">
                    <td>{{d_names[$index]}}</td>
                    <td>{{d}}</td>
                </tr>
            </table>
            <img ng-src="rooms/floors/{{opt.floor.bg}}">
       </div>
	</section>
	<div class="show-description" ng-click="opt.show_floor_description = !0" ng-show="!opt.show_floor_description && opt.floor.description.length">Характеристики этого ламината</div>
</article>
