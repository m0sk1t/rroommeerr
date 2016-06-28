<article>
	<section class="menu">
		<nav>
			<ul style="padding-left: 0;">
				<li class="admin-menu"><a href="/#/" style="color: #fff;">&lt;НАЗАД</a></li>
				<li class="admin-menu" ng-class="{active: item_type === 'doorcoll'}" ng-click="item_type = 'doorcoll'; load();">
				Коллекции дверей
				</li>
				<li class="admin-menu" ng-class="{active: item_type === 'doormodel'}" ng-click="item_type = 'doormodel'; load();">
				Модели дверей
				</li>
				<li class="admin-menu" ng-class="{active: item_type === 'doorgamma'}" ng-click="item_type = 'doorgamma'; load();">
				Гаммы дверей
				</li>
				<li class="admin-menu" ng-class="{active: item_type === 'floorcoll'}" ng-click="item_type = 'floorcoll'; load();">
				Коллекции ламината
				</li>
				<li class="admin-menu" ng-class="{active: item_type === 'floormodel'}" ng-click="item_type = 'floormodel'; load();">
				Модели ламината
				</li>
				<li class="admin-menu" ng-class="{active: item_type === 'floorgamma'}" ng-click="item_type = 'floorgamma'; load();">
				Гаммы ламината
				</li>
				<li class="admin-menu" ng-class="{active: item_type === 'door'}" ng-click="item_type = 'door'; load();">
				Двери
				</li>
				<li class="admin-menu" ng-class="{active: item_type === 'floor'}" ng-click="item_type = 'floor'; load();">
				Ламинат
				</li>
				<li class="admin-menu" ng-class="{active: item_type === 'plinth'}" ng-click="item_type = 'plinth'; load();">
				Плинтус
				</li>
				<li class="admin-menu" ng-class="{active: item_type === 'interior'}" ng-click="item_type = 'interior'; load();">
				Интерьер
				</li>
			</ul>
		</nav>
	</section>
	<section class="items">
		<button class="create" ng-show="item_type" ng-click="create();">Add</button>
		<ul>
			<li ng-repeat="i in items" style="background-color: {{i.color || '#eee'}}">
				<a href="#/item/{{item_type}}/{{i._id}}">{{item_type}}: {{i.article||i.color}}</a>
				<button ng-click="delete(i._id)">Delete</button>
			</li>
		</ul>
	</section>
</article>