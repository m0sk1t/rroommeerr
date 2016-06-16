<article class="splash" ng-show="loading"></article>
<article>
	<section class="menu">
		<nav>
			<ul>
				<li ng-repeat="i in interiors" ng-class="{active: opt.interior.alias === i.alias}" ng-click="opt.interior = i; change_bg('interior');">
					<img src="rooms/interiors/{{i.bg}}">
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
	<section class="actions">
		<nav>
			<ul>
				<li>
					Цвет стен
					<div>
						<span ng-repeat="c in colors" class="color" style="background-color: {{c.color}}" ng-click="set_color(c);"> </span>
					</div>
				</li>
				<li>
					Ламинат
					<div>
						<span ng-repeat="f in floors" class="color" ng-click="opt.floor = f; change_bg('floor');">{{f.article}}</span>
					</div>
				</li>
				<li>
					Модель двери
					<div>
						<span ng-repeat="d in doors" class="color" ng-click="opt.door = d; change_bg('door');">{{d.article}}</span>
					</div>
				</li>
				<li>
					Плинтус
					<div>
						<span ng-repeat="p in plinths" class="color" ng-click="opt.plinth = p; change_bg('plinth');">{{p.article}}</span>
					</div>
				</li>
			</ul>
		</nav>
	</section>
</article>
