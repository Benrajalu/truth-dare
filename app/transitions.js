export default function(){
  this.transition(
    this.fromRoute('login'),
    this.toRoute('index'),
    this.use('toDown', { duration: 350 }),
    this.reverse('toUp', { duration: 350 })
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('listing'),
    this.use('toLeft', { duration: 350 }),
    this.reverse('toRight', { duration: 350 })
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('new-card'),
    this.use('toLeft', { duration: 350 }),
    this.reverse('toRight', { duration: 350 })
  );

  this.transition(
    this.fromRoute('listing'),
    this.toRoute('new-card'),
    this.use('toLeft', { duration: 350 }),
    this.reverse('toRight', { duration: 350 })
  );

  this.transition(
    this.hasClass('activeList'),
    this.toValue(true),
    this.use('toRight', {duration: 250}),
    this.reverse('toLeft', {duration: 250})
  );
}
