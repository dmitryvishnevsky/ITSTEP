let sum = Number(prompt("Enter your sum"));
if (sum >= 200 && sum <= 300)
{
    alert (sum - sum * 0.03);
}
else if (sum >= 301 && sum <= 500)
{
    alert (sum - sum * 0.05);
}
else if (sum >= 501)
{
    alert (sum - sum * 0.03);
}
else {
    alert (sum);
}