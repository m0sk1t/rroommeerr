<article>
	<section class="menu">
		<nav>
			<ul>
				<li ng-repeat="i in interiors" ng-class="{active: opt.interior.alias === i.alias}" ng-click="opt.interior = i;">
					<img ng-src="rooms/interiors/{{i.bg}}">
					<span>{{i.article}}</span>
				</li>
				<li class="action" ng-click="opt.choose_floor = !opt.choose_floor; opt.choose_door = false; select_floor_collections();">
					<span>ЛАМИНАТ</span>
				</li>
				<li class="action" ng-click="opt.choose_door = !opt.choose_door; opt.choose_floor = false; select_door_collections();">
					<span>ДВЕРИ</span>
				</li>
				<li class="action">
					<color-picker
						ng-model="opt.color"
						color-picker-alpha="false"
						color-picker-case="'upper'"
						color-picker-format="'rgb'"
						color-picker-pos="'bottom left'"
						color-picker-swatch-only="true"
					></color-picker>
					<span>ЦВЕТ СТЕН</span>
				</li>
			</ul>
		</nav>
	</section>
	<section class="display">
		<div class="section-layer wall" style="background-color: {{opt.color}}; background-image: url(/rooms/wall.png);"></div>
		<div class="section-layer floor" style="background-image: url(/rooms/floors/{{opt.floor.image}});"></div>
		<div class="section-layer interior" style="background-image: url(/rooms/interiors/{{opt.interior.image}});"></div>
		<div class="section-layer door" style="background-image: url(/rooms/doors/{{opt.door.image}});"></div>
	</section>
	<section class="collection-items" ng-class="{'active': opt.choose_floor}">
		<div><span class="close" ng-click="opt.choose_floor = 0;">Close (x)</span></div>
		<div>
			<span
				class="model"
				ng-repeat="br in brands"
				ng-show="br.target === 'floor'"
				ng-class="{'selected': opt.floor_brand === br._id}"
				ng-click="opt.floor_brand = br._id; select_floor_collections();"
			>
<!-- 				<img ng-src="rooms/brands/{{br.bg}}">
				 -->				{{br.article}}
			</span>
		</div>
		<div>
			Коллекции ламината: 
			<span
				class="model"
				ng-repeat="fc in opt.floor_collections"
				ng-class="{'selected': opt.floorcoll === fc._id}"
				ng-click="opt.floorcoll = fc._id; select_floors();"
			>
				{{fc.article}}
			</span>
		</div>
		<div class="models">
			<div
				class="model-item"
				ng-repeat="f in opt.floors"
				ng-class="{'selected': opt.floor._id === f._id}"
				ng-click="opt.floor = f;"
			>
				<img ng-src="rooms/floors/{{f.bg}}">
				<span>
					{{f.article}}
				</span>
			</div>
		</div>
	</section>
	<section class="collection-items" ng-class="{'active': opt.choose_door}">
		<div><span class="close" ng-click="opt.choose_door = 0;">Close (x)</span></div>
		<div>
			<span
				class="model"
				ng-repeat="br in brands"
				ng-show="br.target === 'door'"
				ng-class="{'selected': opt.door_brand === br._id}"
				ng-click="opt.door_brand = br._id; select_door_collections();"
			>
				{{br.article}}
			</span>
		</div>
		<div>
			<div ng-show="opt.door_collections.length">Выбор коллекции: </div>
			<span
				class="model"
				ng-repeat="dc in opt.door_collections"
				ng-class="{'selected': opt.doorcoll === dc._id}"
				ng-click="opt.doorcoll = dc._id; select_door_models();"
			>
				{{dc.article}}
			</span>
		</div>
		<div class="models">
			<div ng-show="opt.door_models.length">Выбор модели: </div>
			<div
				class="model-item"
				ng-repeat="d in opt.door_models"
				ng-class="{'selected': opt.doormodel === d._id}"
				ng-click="opt.doormodel = d._id; select_doors(); opt.door = opt.doors[0]"
			>
				<img ng-src="rooms/doors/{{d.image}}">
				<span>
					{{d.article}}
				</span>
			</div>
		</div>
		<div class="models">
			<div ng-show="opt.doors.length">Выбор декора: </div>
			<div
				class="model-item"
				ng-repeat="d in opt.doors"
				ng-class="{'selected': opt.door._id === d._id}"
				ng-click="opt.door = d;"
			>
				<img ng-src="rooms/doors/{{d.bg}}">
				<span>
					{{d.article}}
				</span>
			</div>
		</div>
	</section>
</article>
