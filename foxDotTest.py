Clock.sync_to_espgrid(host="localhost", port=5510)

b1 >> pluck([0,2,4,4], dur=[2,0.5,0.5,1], amp=[1,0.75,0.75,1])
b1.stop()

b2 >> bug(PRand([3,1,4,5]), dur=[0.25], amp=[0.25])
b2.stop()

b3 >> snick(PRand([2,5]), dur=[0.25], amp=[0.5])
b3.stop()

b4 >> klank([0,4,0], dur=[4], amp=[0.5])
b4.stop()

print(SynthDefs)
