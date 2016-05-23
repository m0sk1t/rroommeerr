<article class="splash" ng-show="loading"></article>
<article>
	<section class="menu">
		<nav>
			<ul>
				<li ng-class="{active: opt.room === 'bedroom'}" ng-click="opt.room = 'bedroom'">
					<img src="rooms/interiors/bedroom.jpg">
					<span>Спальня</span>
				</li>
				<li ng-class="{active: opt.room === 'livingroom'}" ng-click="opt.room = 'livingroom'">
					<img src="rooms/interiors/livingroom.jpg">
					<span>Гостиная(зал)</span>
				</li>
				<li ng-class="{active: opt.room === 'kitchen'}" ng-click="opt.room = 'kitchen'">
					<img src="rooms/interiors/kitchen.jpg">
					<span>Кухня(столовая)</span>
				</li>
				<li ng-class="{active: opt.room === 'childrenroom'}" ng-click="opt.room = 'childrenroom'">
					<img src="rooms/interiors/childrenroom.jpg">
					<span>Детская</span>
				</li>
			</ul>
		</nav>
	</section>
	<section class="display">
		<div class="section-layer wall" style="background-color: rgb({{color.r}},{{color.g}},{{color.b}}); background-image: url(/rooms/wall.png);"></div>
		<div class="section-layer floor" style="background-image: url(/rooms/floors/floor{{opt.floor}}.png)"></div>
		<div class="section-layer plinth" style="background-image: url(/rooms/plinths/plinth{{opt.plinth}}.png)"></div>
		<div class="section-layer door" style="background-image: url(/rooms/doors/door{{opt.door}}.png)"></div>
		<div class="section-layer interior" style="background-image: url(/rooms/interiors/{{opt.room}}.png)"></div>
	</section>
	<section class="bottom">
		<nav>
			<ul>
				<li>
					Цвет стен
					<div>
						<span ng-repeat="c in colors" class="color" style="background-color: rgb({{c.r}},{{c.g}},{{c.b}})" ng-click="set_color(c);"> </span>
					</div>
				</li>
				<li>
					Ламинат
					<div>
						<span class="color c1" ng-click="opt.floor = 1; change_bg('floor');">1</span>
						<span class="color c2" ng-click="opt.floor = 2; change_bg('floor');">2</span>
					</div>
				</li>
				<li>
					Модель двери
					<div>
						<span class="color c1" ng-click="opt.door = 1; change_bg('door');">1</span>
						<span class="color c2" ng-click="opt.door = 2; change_bg('door');">2</span>
					</div>
				</li>
				<li>
					Плинтус
					<div>
						<span class="color c1" ng-click="opt.plinth = 1; change_bg('plinth');">1</span>
						<span class="color c2" ng-click="opt.plinth = 2; change_bg('plinth');">2</span>
					</div>
				</li>
			</ul>
		</nav>
	</section>
</article>
