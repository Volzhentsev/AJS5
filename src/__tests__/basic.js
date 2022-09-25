import Bowerman from '../bowerman';

test('bowe test', () => {
  const res = new Bowerman('Rob', 'Bowerman');
  const res1 = new Bowerman('Rob', 'Human', 0);
  res1.damage(100);
  expect(res1.health).toBe(0);
  res1.levelUp();
  expect(res1.health).toBe(0);
  expect(res.name).toBe('Rob');
  expect(res.type).toBe('Bowerman');
  expect(res.health).toBe(100);
  expect(res.level).toBe(1);
  expect(res.attack).toBe(25);
  expect(res.defence).toBe(25);
  res.levelUp();
  expect(res.level).toBe(2);
  expect(res.attack).toBe(30);
  expect(res.defence).toBe(30);
  res.damage(10);
  expect(res.health).toBe(93);
});

