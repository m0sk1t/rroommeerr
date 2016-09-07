<article>
	<section class="choice-menu">
		<div class="choice-menu__menu-items">
			<span
				class="choice-menu__menu-item"
				ng-class="{'choice-menu__menu-item_active': opt.choose_interior}"
				ng-click="opt.choose_interior? (opt.choose_interior = !1): show_menu_items('choose_interior')"
			>
				Интерьер
			</span>
			<span
				class="choice-menu__menu-item"
				ng-class="{'choice-menu__menu-item_active': opt.choose_color}"
				ng-click="opt.choose_color? (opt.choose_color = !1): show_menu_items('choose_color')"
			>
				Цвет стен
			</span>
			<span
				class="choice-menu__menu-item"
				ng-class="{'choice-menu__menu-item_active': opt.choose_floor}"
				ng-click="opt.choose_floor? (opt.choose_floor = !1): show_menu_items('choose_floor'); select_floor_collections();"
			>
				Пол
			</span>
			<span
				class="choice-menu__menu-item"
				ng-class="{'choice-menu__menu-item_active': opt.choose_door}"
				ng-click="opt.choose_door? (opt.choose_door = !1): show_menu_items('choose_door'); select_door_collections();"
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
						ng-class="{active: opt.interior.alias === i.alias}"
						ng-click="opt.interior = i; opt.floor.image = select_floor_image();"
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
				<div class="dropdown">
					<div
						class="dropdown-button"
						ng-click="opt.show_decor_dropdown = !opt.show_decor_dropdown"
					>
						{{opt.brname}}
					</div>
					<div ng-show="opt.show_decor_dropdown" class="dropdown-menu">
						<div
							ng-click="opt.brname = 'Все декоры'; opt.show_decor_dropdown = !opt.show_decor_dropdown; opt.floor_brand = null; select_floor_collections();"
						>
							Все декоры
						</div>
						<div
							ng-repeat="br in brands"
							ng-click="opt.brname = br.article; opt.show_decor_dropdown = !opt.show_decor_dropdown; opt.floor_brand = br._id; select_floor_collections();"
						>
							{{br.article}}
						</div>
					</div>
				</div>
				<div class="dropdown" ng-show="opt.floor_brand">
					<div
						class="dropdown-button"
						ng-click="opt.show_coll_dropdown = !opt.show_coll_dropdown"
					>
						{{opt.collname}}
					</div>
					<div ng-show="opt.show_coll_dropdown" class="dropdown-menu">
						<div
							ng-click="opt.collname = 'Все коллекции'; opt.show_coll_dropdown = !opt.show_coll_dropdown; opt.floorcoll = null; select_floor_collections();"
						>
							Все коллекции
						</div>
						<div
							ng-repeat="fc in opt.floor_collections"
							ng-click="opt.collname = fc.article; opt.show_coll_dropdown = !opt.show_coll_dropdown; opt.floorcoll = fc._id;"
						>
							{{fc.article}}
						</div>
					</div>
				</div>
<!-- 				<select ng-model="opt.floor_brand" ng-change="select_floor_collections();">
					<option value=""></option>
					<option value="{{br._id}}" >{{br.article}}</option>
				</select>
				<select ng-model="opt.floorcoll" ng-show="opt.floor_brand">
					<option value="">Выберите коллекцию</option>
					<option value="{{fc._id}}" ng-repeat="fc in opt.floor_collections">{{fc.article}}</option>
				</select>
 -->
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
							{{f.description[0]}} - {{f.description[1]}} {{f.article}}
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
						    <strong>{{get_collection_name(d.coll)}}</strong><br>{{get_model_name(d.model)}} {{d.article}}
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
       		<span>
	       		<div class="floor-header">{{opt.floor.article}}</div>
	            <table>
	                <tr class="characteristics" ng-repeat="d in opt.floor.description track by $index">
	                    <td>{{d_names[$index]}}</td>
	                    <td>{{d}}</td>
	                </tr>
	            </table>
       		</span>
            <img ng-src="rooms/floors/{{opt.floor.bg}}">
       </div>
	</section>
	<div class="show-description" ng-click="opt.show_floor_description = !opt.show_floor_description" ng-show="opt.floor.description.length">Характеристики этого ламината</div>
</article>
