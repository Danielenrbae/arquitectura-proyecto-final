$(".pf-buttons__minus").on("click", function () {
  const old_val = $(".pf-buttons__input").text();

  if (comprobarCantidad(old_val))
    $(".pf-buttons__input").text(parseInt(old_val) - 1);
});

$(".pf-buttons__plus").on("click", function () {
  const old_val = $(".pf-buttons__input").text();

  if (comprobarCantidad(old_val) || parseInt(old_val) == 0)
    $(".pf-buttons__input").text(parseInt(old_val) + 1);
});

function comprobarCantidad(num) {
  let result;
  result = false;
  if (num > 0 && num < 99) result = true;
  return result;
}
