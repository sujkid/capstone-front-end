import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chef-menu/card', 'Integration | Component | chef menu/card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{chef-menu/card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#chef-menu/card}}
      template block text
    {{/chef-menu/card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
