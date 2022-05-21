e=[(_=>{x[i]=cos(v*i)*r;y[i]=sin(v*i)*r;
}),(_=>{x[i]+=z(-s,s);y[i]+=z(-s,s);c(x[i]+m,y[i]+n);
})];
u=15;s=2;r=150;x=[];y=[];

setup=_=>{
createCanvas(windowWidth, windowHeight);
z=random;c=curveVertex
m=width/2;n=height/2;
v=radians(360/u);
for (i=0;i<u;i++){e[0]();}
stroke(0,50);
strokeWeight(.75);
background(255);
frameRate(5);
};
draw=_=>{
m+=(mouseX-m)*.01;
n+=(mouseY-n)*.01;
noFill();
beginShape();
c(x[u-1]+m,y[u-1]+n);
for (i=0;i<u;i++) {e[1]();}
c(x[0]+m,y[0]+n);
c(x[1]+m,y[1]+n);
endShape();
}

function mousePressed() {
m=mouseX;
n=mouseY;
//var radius=r*random(0.5, 1);
for (var i = 0; i < u; i++) {
x[i]=cos(v*i)*r;
y[i]=sin(v*i)*r;
}
}