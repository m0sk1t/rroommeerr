<article>
	<section class="menu">
		<nav>
			<ul>
				<li ng-class="{active: item_type === 'doorcollection'}" ng-click="item_type = 'doorcollection'; load();">
				Коллекции дверей
				</li>
				<li ng-class="{active: item_type === 'floorcollection'}" ng-click="item_type = 'floorcollection'; load();">
				Коллекции ламината
				</li>
				<li ng-class="{active: item_type === 'doordecor'}" ng-click="item_type = 'doordecor'; load();">
				Декор дверей
				</li>
				<li ng-class="{active: item_type === 'door'}" ng-click="item_type = 'door'; load();">
				Двери
				</li>
				<li ng-class="{active: item_type === 'floor'}" ng-click="item_type = 'floor'; load();">
				Ламинат
				</li>
				<li ng-class="{active: item_type === 'plinth'}" ng-click="item_type = 'plinth'; load();">
				Плинтус
				</li>
				<li ng-class="{active: item_type === 'interior'}" ng-click="item_type = 'interior'; load();">
				Интерьер
				</li>
				<li ng-class="{active: item_type === 'color'}" ng-click="item_type = 'color'; load();">
				Цвета стен
				</li>
			</ul>
		</nav>
	</section>
	<section class="items">
		<button class="create" ng-show="item_type" ng-click="create();">Add</button>
		<ul>
			<li ng-repeat="i in items" style="background-color: {{i.color}}">
				<a href="#/item/{{item_type}}/{{i._id}}">{{item_type}}: {{i.article||i.color}}</a>
				<button ng-click="delete(i._id)">Delete</button>
			</li>
		</ul>
	</section>
</article>