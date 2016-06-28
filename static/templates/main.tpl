<article>
	<section class="menu">
		<nav>
			<ul>
				<li ng-repeat="i in interiors" ng-class="{active: opt.interior.alias === i.alias}" ng-click="opt.interior = i; change_bg('interior');">
					<img ng-src="rooms/interiors/{{i.bg}}">
					<span>{{i.article}}</span>
				</li>
			</ul>
		</nav>
	</section>
	<section class="display">
		<div class="section-layer wall" style="background-color: {{opt.color}}; background-image: url(/rooms/wall.png);"></div>
		<div class="section-layer floor"></div>
		<div class="section-layer plinth"></div>
		<div class="section-layer door"></div>
		<div class="section-layer interior"></div>
	</section>
	<section class="collection-items" ng-show="opt.collection_opened">
		<div><span ng-click="opt.collection_opened = false;">Close (x)</span></div>
		<div class="models">
			<div
				class="model-item"
				ng-repeat="m in opt.model_items"
				ng-class="{'active': opt.selected_model._id === m._id}"
				ng-click="opt.selected_model = m; opt[opt.selected_item] = model_item(m); select_gammas(m); opt[opt.selected_item] && change_bg(opt.selected_item);"
			>
				<img ng-src="rooms/{{opt.selected_item}}s/{{m.image}}">
				<span>
					{{m.article}}
				</span>
			</div>
		</div>
		<div class="gammas">
			<div
				class="model-item"
				ng-repeat="g in opt.gamma_items"
				ng-class="{'active': opt.selected_item.gamma === g._id}"
				ng-click="select_gamma(g); change_bg(opt.selected_item)"
			>
				<img ng-src="rooms/{{opt.selected_item}}s/{{g.image}}">
				<span>
					{{g.article}}
				</span>
			</div>
		</div>
	</section>
	<section class="actions">
		<nav>
			<ul>
				<li>
					Цвет стен
					<input type="color" placeholder="Цвет" ng-model="opt.color"><br>
				</li>
				<li>
					Модели ламината
					<div>
						<div
							class="model"
							ng-repeat="fc in floorcolls"
							ng-click="opt.floorcoll = fc._id; opt.selected_item = 'floor'; select_models(); opt.collection_opened = true;"
						>
							{{fc.article}}
						</div>
					</div>
				</li>
				<li>
					Модели дверей
					<div>
						<div
							class="model"
							ng-repeat="dc in doorcolls"
							ng-click="opt.doorcoll = dc._id; opt.selected_item = 'door'; select_models(); opt.collection_opened = true;"
						>
							{{dc.article}}
						</div>
					</div>
				</li>
				<li>
					Плинтус
					<div>
						<div ng-repeat="p in plinths" class="color" ng-click="opt.plinth = p; change_bg('plinth')">
							<img class="color" ng-src="rooms/plinths/{{p.bg}}" alt="{{p.article}}">
						</div>
					</div>
				</li>
			</ul>
		</nav>
	</section>
</article>
